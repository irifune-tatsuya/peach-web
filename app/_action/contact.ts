import axios from 'axios';

type formInputs = {
  lastname: string;
  firstname: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
};

export async function createContactData(data: formInputs) {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  const formGuid = process.env.NEXT_PUBLIC_HUBSPOT_FROM_ID;
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const responce = await axios.post(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        portalId,
        formGuid,
        fields: [
          { name: 'lastname', value: data.lastname },
          { name: 'firstname', value: data.firstname },
          { name: 'company', value: data.company },
          { name: 'email', value: data.email },
          { name: 'phone', value: data.phone },
          { name: 'message', value: data.message },
        ],
      },
      config,
    );
    return 'succcess';
  } catch (error) {
    return 'error';
  }
}
