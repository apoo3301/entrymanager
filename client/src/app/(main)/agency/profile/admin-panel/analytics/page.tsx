"use client";

import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress"

export default function AnalyticsPage() {
  return (
    <div className="mt-60 m-10 flex flex-col gap-5">
      <div className="mx-auto max-w-md text-center">
        <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
          Under Construction
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Website in Progress
        </h1>
        <p className="mt-4 text-muted-foreground">
          We`&apos;`re working hard to bring you an amazing new experience. Please check back soon!
        </p>
        <div className="mt-6">
          <Progress value={50} className="w-full" />
        </div>
      </div>
    </div>
  );
}
