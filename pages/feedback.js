import Head from "next/head";
import useSWR from "swr";

import { UseAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";
import DashboardShell from "@/components/DashboardShell";
import fetcher from "@/utils/fetcher";
import FeedbackTable from "@/components/FeedbackTable";
import FeedbackTableHeader from "@/components/FeedbackTableHeader";
import FeedbackTableSkeleton from "@/components/Skeleton/FeedbackTableSkeleton";

function MyFeedback() {
  const { user } = UseAuth();
  const { data } = useSWR(user ? ["/api/feedback", user.token] : null, fetcher);
  if (!data) {
    return (
      <DashboardShell>
        <FeedbackTableHeader />
        <FeedbackTableSkeleton />
      </DashboardShell>
    );
  }
  if (data.error?.message) {
    return <EmptyState />;
  }
  return (
    <div>
      {/* Page Heading */}
      <Head>
        <title>⚡️ Lightning Feedback</title>
        <meta name="description" content="Created by PS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DashboardShell siteCount={data.feedback.length}>
        <FeedbackTableHeader />
        {data.feedback?.length > 0 ? (
          <FeedbackTable allfeedback={data.feedback} />
        ) : (
          <EmptyState />
        )}
      </DashboardShell>
    </div>
  );
}

export default MyFeedback;
