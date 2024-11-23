/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable ";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";

type Props = {};
type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
];

const data: Payment[] = [
  {
    name: "Ethan Turner",
    email: "ethan.turner@example.com",
    lastOrder: "2023-01-12",
    method: "Debit Card",
  },
  {
    name: "Lily Thompson",
    email: "lily.thompson@example.com",
    lastOrder: "2023-02-20",
    method: "PayPal",
  },
  {
    name: "Mason White",
    email: "mason.white@example.com",
    lastOrder: "2023-03-25",
    method: "Google Pay",
  },
  {
    name: "Ella Harris",
    email: "ella.harris@example.com",
    lastOrder: "2023-04-08",
    method: "Apple Pay",
  },
  {
    name: "Lucas Adams",
    email: "lucas.adams@example.com",
    lastOrder: "2023-05-14",
    method: "Bank Transfer",
  },
  {
    name: "Grace Nelson",
    email: "grace.nelson@example.com",
    lastOrder: "2023-06-02",
    method: "Cryptocurrency",
  },
  {
    name: "Henry Baker",
    email: "henry.baker@example.com",
    lastOrder: "2023-07-18",
    method: "Cash",
  },
  {
    name: "Amelia Scott",
    email: "amelia.scott@example.com",
    lastOrder: "2023-08-27",
    method: "Stripe",
  },
  {
    name: "Alexander Walker",
    email: "alexander.walker@example.com",
    lastOrder: "2023-09-15",
    method: "Alipay",
  },
  {
    name: "Harper Campbell",
    email: "harper.campbell@example.com",
    lastOrder: "2023-10-30",
    method: "Square Cash",
  },
  {
    name: "Daniel Edwards",
    email: "daniel.edwards@example.com",
    lastOrder: "2023-11-20",
    method: "WeChat Pay",
  },
  {
    name: "Chloe Wright",
    email: "chloe.wright@example.com",
    lastOrder: "2023-12-12",
    method: "Venmo",
  },
  {
    name: "Matthew Mitchell",
    email: "matthew.mitchell@example.com",
    lastOrder: "2024-01-25",
    method: "Payoneer",
  },
  {
    name: "Scarlett Rogers",
    email: "scarlett.rogers@example.com",
    lastOrder: "2024-02-28",
    method: "Credit Card",
  },
  {
    name: "Jack Phillips",
    email: "jack.phillips@example.com",
    lastOrder: "2024-03-15",
    method: "Zelle",
  },
];

export default function UsersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
