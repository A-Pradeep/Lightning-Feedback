import Head from "next/head";
import useSWR from "swr";

import { UseAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/Skeleton/SiteTableSkeleton";
import DashboardShell from "@/components/DashboardShell";
import fetcher from "@/utils/fetcher";
import SiteTable from "@/components/SiteTable";

function dashboard() {
  const { user } = UseAuth();
  const { data } = useSWR(user ? ["/api/sites", user.token] : null, fetcher);
  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
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

      <DashboardShell siteCount={data.sites.length}>
        {data.sites?.length > 0 ? (
          <SiteTable sites={data.sites} />
        ) : (
          <EmptyState />
        )}
      </DashboardShell>
    </div>
  );
}

export default dashboard;
