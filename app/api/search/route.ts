import { NextRequest, NextResponse } from 'next/server';
import { searchDocs } from '@/app/lib/docs';
import { getCurrentUser } from '@/app/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const category = searchParams.get('category');
    const difficulty = searchParams.get('difficulty');

    if (!query) {
      return NextResponse.json(
        { error: 'Search query is required' },
        { status: 400 }
      );
    }

    // Perform search
    let results = searchDocs(query);

    // Apply filters
    if (category) {
      results = results.filter(result => 
        result.tags.includes(category) || 
        result.sectionId.includes(category)
      );
    }

    if (difficulty) {
      results = results.filter(result => 
        result.difficulty === difficulty
      );
    }

    // Limit results
    const limitedResults = results.slice(0, 20);

    return NextResponse.json({
      results: limitedResults,
      total: results.length,
      query,
      filters: {
        category,
        difficulty,
      }
    });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
