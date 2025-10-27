import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ServicePlan } from '@/types/service';
import { Badge } from '@/components/ui/badge';
import { CircleCheck } from 'lucide-react';

type Props = {
  plan: ServicePlan;
};

export const PlanCard = ({ plan }: Props) => {
  return (
    <div className="w-[80vw] max-w-[350px] flex-shrink-0 snap-center lg:w-1/3">
      <Card className="h-full flex flex-col shadow-lg rounded-xl overflow-hidden border border-momo-100">
        <CardHeader className="p-5 relative">
          {plan.eyeCatch && (
            <Badge className="absolute top-4 left-4 bg-momo-100 text-white shadow">
              {plan.eyeCatch}
            </Badge>
          )}
          <CardTitle className="font-bold text-momo-100 pt-10 text-center">
            {plan.planName}
          </CardTitle>
          <div className="mt-1 text-center">
            <span className="inline-flex items-center gap-1">
              <span className="inline-block bg-momo-300 px-2 py-0.5 rounded text-xs font-bold">
                {plan.planType}
              </span>
              <span className="text-2xl font-bold">{plan.price.toLocaleString()}</span>
              <span className="text-sm pt-1">
                円{plan.planType === '月額' ? '/月' : ''}
                <span className="text-xs"> / 税別</span>
                {plan.isStartingPrice && '〜'}
              </span>
            </span>
          </div>
        </CardHeader>
        <div className="px-6">
          <div className="w-16 h-px bg-momo-100 mx-auto" />
        </div>
        <CardContent className="p-6 flex-grow">
          <p className="text-sm text-gray-700 leading-relaxed">{plan.planLead}</p>
          <ul className="mt-4 space-y-2">
            {plan.planList.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <CircleCheck className="w-4 h-4 text-momo-100 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
