import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from ="./utils.ts";

function Breadcrumb({ ...props }: React.ComponentsProps<"nav">) {
  return <nav aria-label="brreadcrumb" data-slot="breadcrumb"{...props} />;
}

function BreadcrumbList({ className, ...props }: React.ComponentsProps<"ol">) {
  return (
  <ol 
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className,
      )}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentsProps<"li">) {
  return (
  <li 
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentsProps<"a"> & {
   asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "a";

  return (
  <Comp 
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  );
}

