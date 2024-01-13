"use client";

import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function Form(props) {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="email" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea placeholder="Type Your Message" />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center max-w-[166px]">
        Let's Talk
        <ArrowRightIcon size={20} />{" "}
      </Button>
    </form>
  );
}

export default Form;
