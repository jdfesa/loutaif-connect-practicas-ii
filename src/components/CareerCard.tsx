import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface CareerCardProps {
  title: string;
  description: string;
  link: string;
  type: "profesorado" | "tecnicatura";
}

const CareerCard = ({ title, description, link, type }: CareerCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="mb-2">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
              type === "profesorado"
                ? "bg-accent/10 text-accent"
                : "bg-primary/10 text-primary"
            }`}
          >
            {type === "profesorado" ? "Profesorado" : "Tecnicatura"}
          </span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link to={link}>
          <Button variant="outline" className="w-full group">
            Ver más información
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CareerCard;
