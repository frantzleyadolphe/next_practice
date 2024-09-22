"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <Button variant="outline" onClick={() => router.push("/login")}>
        Click me
      </Button>
    </main>
  );
}
