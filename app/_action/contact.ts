'use server';

import axios from 'axios';
import type { ContactFormValues } from '@/lib/schema';

type startMailMagazineInputs = {
  lastname: string;
  firstname: string;
  company?: string;
  email: string;
};

type stopMailMagazineInputs = {
  email: string;
};

export async function createContactData(data: ContactFormValues) {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  const formGuid = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;
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

export async function createStartMailMagazineData(data: startMailMagazineInputs) {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  const formGuid = process.env.NEXT_PUBLIC_HUBSPOT_START_MAIL_MAGAZINE_FORM_ID;
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
        ],
      },
      config,
    );
    return 'succcess';
  } catch (error) {
    return 'error';
  }
}

export async function createStopMailMagazineData(data: stopMailMagazineInputs) {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  const formGuid = process.env.NEXT_PUBLIC_HUBSPOT_STOP_MAIL_MAGAZINE_FORM_ID;
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
        fields: [{ name: 'email', value: data.email }],
      },
      config,
    );
    return 'succcess';
  } catch (error) {
    return 'error';
  }
}
