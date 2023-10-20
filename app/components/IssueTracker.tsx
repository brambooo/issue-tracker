import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

// Record = key/value pair in TS.
const statusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  CLOSED: { label: "Closed", color: "green" },
};

interface Props {
  status: Status;
}

const IssueTracker = ({ status }: Props) => {
  return (
    <Badge color={statusMap[status]?.color}>{statusMap[status]?.label}</Badge>
  );
};

export default IssueTracker;
