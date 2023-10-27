import { Issue } from "@prisma/client";
import React from "react";

import { Heading, Text, Card } from "@radix-ui/themes";
import { IssueStatusBadge } from "@/app/components";
import ReactMarkdown from "react-markdown";

interface Props {
  issue: Issue;
}

const IssueDetails = ({ issue }: Props) => {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <div className="flex space-x-3">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </div>
      <Card className="prose max-w-full" mt="4">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
