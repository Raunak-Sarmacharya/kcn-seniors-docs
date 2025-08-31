#!/usr/bin/env node

/**
 * Performance testing script for documentation API
 * Run with: node scripts/performance-test.js
 */

const https = require('https');
const http = require('http');

const BASE_URL = 'http://localhost:3000';
const TEST_ENDPOINTS = [
  '/api/docs?slug=welcome',
  '/api/docs?sectionId=getting-started',
  '/api/docs?slug=user-management-overview',
  '/api/docs?sectionId=user-management',
];

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    
    const req = http.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        
        resolve({
          statusCode: res.statusCode,
          duration,
          size: data.length,
          cacheControl: res.headers['cache-control'] || 'none'
        });
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

async function runPerformanceTest() {
  console.log('🚀 Starting performance test for documentation API...\n');
  
  const results = [];
  
  for (const endpoint of TEST_ENDPOINTS) {
    const url = `${BASE_URL}${endpoint}`;
    console.log(`Testing: ${endpoint}`);
    
    try {
      // First request (cold)
      const coldResult = await makeRequest(url);
      console.log(`  Cold request: ${coldResult.duration}ms (${coldResult.size} bytes)`);
      
      // Wait a bit
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Second request (warm cache)
      const warmResult = await makeRequest(url);
      console.log(`  Warm request: ${warmResult.duration}ms (${warmResult.size} bytes)`);
      
      // Wait a bit
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Third request (hot cache)
      const hotResult = await makeRequest(url);
      console.log(`  Hot request: ${hotResult.duration}ms (${hotResult.size} bytes)`);
      
      const improvement = ((coldResult.duration - hotResult.duration) / coldResult.duration * 100).toFixed(1);
      console.log(`  Cache improvement: ${improvement}%`);
      console.log(`  Cache headers: ${hotResult.cacheControl}\n`);
      
      results.push({
        endpoint,
        cold: coldResult.duration,
        warm: warmResult.duration,
        hot: hotResult.duration,
        improvement: parseFloat(improvement)
      });
      
    } catch (error) {
      console.error(`  Error testing ${endpoint}:`, error.message);
    }
  }
  
  // Summary
  console.log('📊 Performance Test Summary:');
  console.log('=============================');
  
  const avgImprovement = results.reduce((sum, r) => sum + r.improvement, 0) / results.length;
  console.log(`Average cache improvement: ${avgImprovement.toFixed(1)}%`);
  
  const avgColdTime = results.reduce((sum, r) => sum + r.cold, 0) / results.length;
  const avgHotTime = results.reduce((sum, r) => sum + r.hot, 0) / results.length;
  console.log(`Average cold request time: ${avgColdTime.toFixed(0)}ms`);
  console.log(`Average hot request time: ${avgHotTime.toFixed(0)}ms`);
  console.log(`Overall speed improvement: ${((avgColdTime - avgHotTime) / avgColdTime * 100).toFixed(1)}%`);
  
  console.log('\n✅ Performance test completed!');
}

// Run the test
runPerformanceTest().catch(console.error);
