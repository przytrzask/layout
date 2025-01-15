import Link from "next/link";

export function TabsDemo() {
  return (
    <div className="grid w-full grid-cols-2 inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
      <Link href="/questions">Questions</Link>
      <Link href="/sessions">Sessions</Link>
    </div>
  );
}
