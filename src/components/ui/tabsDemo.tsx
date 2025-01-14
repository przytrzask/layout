import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="questions">Questions</TabsTrigger>
      <TabsTrigger value="sessions">Sessions</TabsTrigger>
    </TabsList>
  );
}
