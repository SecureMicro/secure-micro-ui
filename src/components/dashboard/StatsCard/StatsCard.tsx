import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@mui/material";

const StatsCard: React.FC<{
  title: string;
  value: number;
  className: string;
  valueClassName: string;
}> = ({ title, value, className = "", valueClassName = "" }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`text-3xl font-bold ${valueClassName}`}>{value}</div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
