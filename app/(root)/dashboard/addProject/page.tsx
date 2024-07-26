"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { projectSchema } from "@/lib/validator";
import { createProject } from "@/lib/actions/route";

const AddProductPage = () => {
  const router = useRouter();

  const initialValues = {
    name: "",
    description: "",
    techStack: "",
    liveSite: "",
    github: "",
    achieved: "",
    implementation: "",
  };

  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(values: z.infer<typeof projectSchema>) {
    console.log("Form values:", values);
    const response = await createProject(values);

    toast.success("Project added successfully");
    console.log(response);
    form.reset();
  }

  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full px-10 p-5 mt-32 text-white gap-10">
      <h1 className="text-[#E7E7E4] text-3xl md:text-6xl font-bold tracking-tighter text-center max-w-md">
        Add projects to brag about!
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 mb-10"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Project Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                    className="rounded-2xl placeholder:text-slate-400 w-[300px] md:w-[500px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Project Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Description"
                    {...field}
                    className="rounded-2xl placeholder:text-slate-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="techStack"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Tech Stack (comma separated)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tech Stack"
                    {...field}
                    className="rounded-2xl placeholder:text-slate-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="liveSite"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Live Site Link</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Live Site"
                    {...field}
                    className="rounded-2xl placeholder:text-slate-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="github"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Github Link</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Github"
                    {...field}
                    className="rounded-2xl placeholder:text-slate-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="achieved"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What was achieved</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Achieved"
                    {...field}
                    className="rounded-2xl placeholder:text-slate-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="implementation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Implementation Details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Implementation"
                    {...field}
                    className="rounded-2xl placeholder:text-slate-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="bg-[#E7E7E4] rounded-2xl text-black hover:bg-[#E7E7E4] hover:opacity-80 mb-14"
            type="submit"
          >
            {form.formState.isSubmitting ? "Submitting..." : "Submit Project"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddProductPage;
