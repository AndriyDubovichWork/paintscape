import { NextResponse } from 'next/server';
import React from 'react';

export const GET = () => {
  return NextResponse.json({ hello: 'world' });
};
