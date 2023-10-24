import React from "react";
import prisma from "@/prisma/client";
import delay from "delay";
import IssueActions from "./IssueActions";
import IssueTable from "./IssueTable";
import { Flex } from "@radix-ui/themes";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany({
    // where,
    // orderBy,
    // skip: (page - 1) * pageSize,
    // take: pageSize,
  });

  return (
    <Flex direction="column" gap="3">
      <IssueActions />
      <IssueTable issues={issues} />
    </Flex>
  );
};

export default IssuesPage;
