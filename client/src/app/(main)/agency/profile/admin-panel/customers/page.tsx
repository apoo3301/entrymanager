"use client";

import SuspenseBoundary from "@/components/SuspenseBoundary";
import React, { useState, useEffect } from "react";
import CustomersContent from "../_components/customersContent";

export default function Customers() {
  return (
    <SuspenseBoundary>
      <CustomersContent />
    </SuspenseBoundary>
  );
}
