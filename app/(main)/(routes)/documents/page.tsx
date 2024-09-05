"use client"

import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useMutation } from "convex/react";
import { toast } from "sonner";

import { api } from "@/convex/_generated/api"
import { Button } from "@/components/ui/button";

const DocumentPage = () => {
  const { user } = useUser();
  const create = useMutation(api.document.create)

  const onCreate = () => {
    const promise = create({ title: "Untitled" })

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note create!",
      error: "Failed to create a new note.",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center spacy-y-4">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="empty"
        className="hidden dark:block"
      />
      <h2>
        Welcome to  {user?.fullName}&apos;s Jotion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
}

export default DocumentPage;