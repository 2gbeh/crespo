import type {
  FieldValues,
  FieldErrors,
  UseFormRegister,
  UseFormHandleSubmit,
} from "react-hook-form";
import { z } from "zod";
import { ECategory } from "@/constants/enums/Lists";

export const defaultValues = {
  category: ECategory.Worker,
  surname: "Tugbeh",
  other_names: "Emmanuel Osaretin",
  phone: "08169960927",
  mobile: "",
};

export const createMemberSchema = z.object({
  category: z.nativeEnum(ECategory),
  surname: z.string().min(2),
  other_names: z.string().min(2),
  phone: z.string().min(11),
  mobile: z.string().min(11).optional(),
});

export type TCreateMemberSchema = z.infer<typeof createMemberSchema>;

export type TFormControl = {
  self: {
    M: Record<string, number>;
    register: UseFormRegister<TCreateMemberSchema>;
    errors: FieldErrors<TCreateMemberSchema>;
  };
};

export type TFormWrapper = {
  children: React.ReactNode;
  self: {
    M: Record<string, number>;
    handleSubmit: UseFormHandleSubmit<TCreateMemberSchema>;
    handledSubmit: (formData: FieldValues) => void;
    isSubmitting: boolean;
  };
};
