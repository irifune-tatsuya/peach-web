'use client';

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
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_ID;
  const config = {
    headers: {
      'Message-Type': 'application/json',
    },
  };
  return await axios
    .post(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        portalId,
        formGuid,
        fields: [
          { objectTypeId: '0-1', name: 'lastname', value: data.lastname },
          { objectTypeId: '0-1', name: 'firstname', value: data.firstname },
          { objectTypeId: '0-1', name: 'company', value: data.company },
          { objectTypeId: '0-1', name: 'email', value: data.email },
          { objectTypeId: '0-1', name: 'phone', value: data.phone },
          { objectTypeId: '0-1', name: 'message', value: data.message },
        ],
      },
      config,
    )
    .then((res) => {
      console.log(res);
    });
}
