"use client";

import { useEffect } from "react";

export default function Error({ error }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-8">
      <h1>Oh-oh! Something went wrong.</h1>
      <p>We are working to handle this error.</p>
      <p>Try again</p>
    </div>
  )
}
