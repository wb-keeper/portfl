"use client";

import { User } from "lucide-react";
import { Input } from "@/components/ui/input";

function Form(props) {
  return (
    <form>
      <div>
        <Input />
        <User className="absolute right-6" size={20} />
      </div>
    </form>
  );
}

export default Form;
