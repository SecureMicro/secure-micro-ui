import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";

const StatsCard: React.FC<{
  title: string;
  value: number;
  className?: string;
  valueClassName: string;
}> = ({ title, value, className = "", valueClassName = "" }) => {
  console.log(className);
  return (
    <Card>
      <CardHeader title={title} />
      <CardContent>
        <div className={`text-3xl font-bold ${valueClassName}`}>{value}</div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;