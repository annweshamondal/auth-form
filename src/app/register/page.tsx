import RegisterForm from "@/components/customui/forms/RegisterForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";

const page = () => {
  return (
    <>
      <section className="grid h-[80dvh] place-items-center">
        <Card className="w-sm">
          <CardHeader>
            <CardTitle className="grid place-items-center text-2xl">
              REGISTER
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RegisterForm />
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default page;
