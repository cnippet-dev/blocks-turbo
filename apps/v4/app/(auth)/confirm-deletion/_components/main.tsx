"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { confirmAccountDeletion } from "@/lib/actions/profile.actions";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { signOut } from "next-auth/react";

export default function ConfirmDeletionPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //     if (token) {
  //         handleConfirmation();
  //     }
  // }, [token]);

  const handleConfirmation = async () => {
    if (!token) {
      setStatus("error");
      setMessage("Invalid confirmation link");
      return;
    }

    setStatus("loading");
    try {
      const result = await confirmAccountDeletion(token);

      if ("success" in result && result.success) {
        setStatus("success");
        setMessage("Your account has been successfully deleted.");
        // Proactively sign the user out from this browser and redirect
        await signOut({ callbackUrl: "/" });
      } else {
        setStatus("error");
        setMessage(
          "error" in result ? result.error.general : "Failed to delete account",
        );
      }
    } catch (error) {
      setStatus("error");
      setMessage("An unexpected error occurred");
      console.error("Account deletion error:", error);
    }
  };

  if (status === "success") {
    return (
      <section className="relative h-screen w-full overflow-hidden dark:bg-black">
        <div className="mx-auto w-full max-w-6xl px-4 pt-16 md:px-8">
          <div className="relative w-full">
            <div className="col-span-10 flex w-full flex-col items-center justify-center bg-white p-8 text-center md:p-16 dark:bg-black">
              <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                  <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-500" />
                  <h1 className="mb-2 text-3xl font-semibold md:text-4xl">
                    Account deleted
                  </h1>
                  <p className="text-gray-500">{message}</p>
                  <p className="mt-2 text-sm text-gray-500">
                    You will be redirected to the home page shortly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (status === "error") {
    return (
      <section className="relative h-screen w-full overflow-hidden dark:bg-black">
        <div className="mx-auto w-full max-w-6xl px-4 pt-16 md:px-8">
          <div className="relative w-full">
            <div className="col-span-10 flex w-full flex-col items-center justify-center bg-white p-8 text-center md:p-16 dark:bg-black">
              <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                  <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-red-500" />
                  <h1 className="mb-2 text-3xl font-semibold md:text-4xl">
                    Something went wrong
                  </h1>
                  <p className="mb-4 text-gray-500">{message}</p>
                </div>
                <Button
                  onClick={() => router.push("/")}
                  className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-none bg-blue-700 text-white shadow-none hover:bg-blue-800"
                >
                  Return to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden dark:bg-black">
      <div className="mx-auto h-full w-full max-w-6xl px-4 md:px-8">
        <div className="mx-auto flex h-full w-full max-w-md flex-col items-center justify-center">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-semibold md:text-4xl">
              Delete your account
            </h1>
            <p className="text-gray-500">
              Confirm deletion to permanently remove your account
            </p>
          </div>

          <Button
            onClick={handleConfirmation}
            className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-none bg-blue-700 text-white shadow-none hover:bg-blue-800"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Processing..." : "Confirm Deletion"}
          </Button>
        </div>
      </div>
    </section>
  );
}
