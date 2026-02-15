import Link from "next/link";
import MaterialIcon from "@/components/MaterialIcon";

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background-light p-4 text-center dark:bg-background-dark">
      <div className="mb-6 rounded-full bg-primary/10 p-6 text-primary">
        <MaterialIcon icon="wifi_off" className="text-6xl" />
      </div>
      <h1 className="mb-2 text-3xl font-black text-[#181411] dark:text-white">
        You are offline
      </h1>
      <p className="mb-8 max-w-md text-[#8c725f] dark:text-gray-400">
        It looks like you don't have an active internet connection. Please check
        your network settings and try again.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-primary px-8 py-3 font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 active:scale-95"
      >
        Try Again
      </Link>
    </div>
  );
}
