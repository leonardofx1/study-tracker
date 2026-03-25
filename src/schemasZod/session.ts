import z, { nonnegative } from "zod";

export const sessionSchema = z.object({
  id: z.string(),
  sessionDuration: z
    .number()
    .positive({ message: "Enter a positive value for the study section." }),
  date: z.coerce.date(),
  subjectId: z
    .string()
    .min(5, { message: "Please provide a valid subject ID." }),
});

export const deleteSession = z.object({
  id: z.string().min(5, { message: "Please provide a valid session ID." }),
});
export const findSession = z.object({id:z.string().min(5, { message: "Please provide a valid subject ID." })})
