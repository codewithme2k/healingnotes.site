import { NextResponse, type NextRequest } from "next/server";

async function convertkitSubscribe(email: string) {
  const { CONVERTKIT_FORM_ID, CONVERTKIT_API_KEY } = process.env;
  return await fetch(
    `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
    {
      body: JSON.stringify({ email, api_key: CONVERTKIT_API_KEY }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    }
  );
}

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }
  try {
    const response = await convertkitSubscribe(email);
    if (response.status >= 400) {
      return NextResponse.json(
        { error: `There was an error subscribing to the list` },
        { status: response.status }
      );
    }
    return NextResponse.json(
      { message: "Successfully subscribed to the newsletter" },
      { status: 201 }
    );
  } catch (error: unknown) {
    // Type assertion here
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
