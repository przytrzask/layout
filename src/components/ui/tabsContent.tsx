import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";

export const TabContentDemo = () => {
  return (
    <>
      <TabsContent value="homepage">
        <div className="flex flex-col gap-4 p-4">
          <Card className="rounded-lg border border-border bg-card p-6">
            <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
            <p className="mt-2 text-muted-foreground">
              This is a sample content area with rounded corners.
            </p>
            <div className="mt-4">
              <Button>Get Started</Button>
            </div>
          </Card>

          {/* Sample content to demonstrate scrolling */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card
                key={i}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h2 className="text-lg font-semibold">Card {i + 1}</h2>
                <p className="mt-2 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="sessions">
        <div className="flex flex-col gap-4 p-4">
          <h1 className="text-2xl font-bold">Sessions</h1>
          <p className="mt-2 text-muted-foreground">
            This is a sample content area with rounded corners.
          </p>
        </div>
      </TabsContent>
      ;
    </>
  );
};
