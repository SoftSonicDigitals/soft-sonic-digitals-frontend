import {
  ClientLayoutAnimator,
  ClientStatistics,
} from "@/components/Dashboard/Clients";

const page = () => {
  return (
    <main className="pl-[5rem]">
      <ClientLayoutAnimator>
        <ClientStatistics />
      </ClientLayoutAnimator>
    </main>
  );
};

export default page;
