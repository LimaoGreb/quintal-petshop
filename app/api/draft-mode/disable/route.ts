import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

/** Desliga o modo de edição visual, voltando o site à visão normal (publicada). */
export async function GET(request: Request) {
  const draft = await draftMode();
  draft.disable();
  return NextResponse.redirect(new URL("/", request.url));
}
