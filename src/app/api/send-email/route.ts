//Templates
import SuspendTemplate from "../../../../emails/SuspendTemplate";
import RevokeSuspensionTemplate from "../../../../emails/RevokeSuspension";
import AccountDeletedTemplate from "../../../../emails/AccountDeleted";

//Needed Utils
import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";


export async function POST(request: Request) {
    const body = await request.json();
    try {
        const { to, subject, emailType} = body;

        if (!to || !subject || !emailType ) {

            throw new Error('Fill in the fields')
        }

        let emailHtml;

        switch (emailType) {
          
          case "userSuspension":
            emailHtml = render(SuspendTemplate());
            break;
          case "revokeSuspension":
            emailHtml = render(RevokeSuspensionTemplate());
            break;
          case "adminDeleted":
            emailHtml = render(AccountDeletedTemplate());
            break;
          default:
            throw new Error('Invalid emailType');
        }

      await sendEmail({
        to,
        subject,
        html: emailHtml,
      });

      return new NextResponse('Email Send Successfully', { status: 200 })

    }catch (error) {
        if (error instanceof Error) {
          return new NextResponse(error.message);
        } else {
          return new NextResponse('Internal Server Error', { status: 500 });
        }
      }
}
