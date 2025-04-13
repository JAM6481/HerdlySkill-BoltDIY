import {
  json,
  type LoaderFunctionArgs,
  type MetaDescriptor,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { roles } from "~/roles";
import { Assessment } from "~/components/Assessment";
import { strategicProgramManagerQuestions } from "~/assessment-questions";

type LoaderData = {
  role: (typeof roles)[0];
};

export const meta = ({ data }: { data: LoaderData }): MetaDescriptor => {
  return {
    title: `HerdlySkill - ${data.role.name} Assessment`,
  };
};

export async function loader({ params }: LoaderFunctionArgs) {
  const roleId = params.roleId;
  const role = roles.find((role) => role.id === roleId);

  if (!role) {
    throw new Response("Not Found", { status: 404 });
  }

  return json<LoaderData>({ role });
}

export default function RoleAssessment() {
  const { role } = useLoaderData<typeof loader>();

  const questions =
    role.name === "Strategic Program Manager"
      ? strategicProgramManagerQuestions
      : [];

  return (
    <Assessment
      role={role}
      questions={questions}
    />
  );
}
