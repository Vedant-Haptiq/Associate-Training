import React from "react";
import { Users, Award, Shield, Truck } from "lucide-react";

const About = () => {
  const stats = [
    {
      label: "Happy Customers",
      value: "10,000+",
      icon: <Users className="w-8 h-8 text-yellow-950" />,
    },
    {
      label: "Products Sold",
      value: "50,000+",
      icon: <Award className="w-8 h-8 text-yellow-950" />,
    },
    {
      label: "Years of Experience",
      value: "5+",
      icon: <Shield className="w-8 h-8 text-yellow-950" />,
    },
    {
      label: "Orders Delivered",
      value: "25,000+",
      icon: <Truck className="w-8 h-8 text-yellow-950" />,
    },
  ];

  return (
    <div className="min-h-screen bg-yellow-950">
      {/* Hero Section */}
      <section className="bg-yellow-950 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
            About Vedantu
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            We believe in delivering Experience that none is!
          </p>
        </div>
      </section>
      {/* Stats */}

      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-950 mb-3">
              Our Values
            </h2>
            <p className="text-yellow-950">
              Principles that guide everything we do
            </p>
          </div>

          <div className="gap-8">
            {[
              {
                title: "Authenticity",
                text: "Genuine, transparent, and honest – no hidden fees or false promises.",
              },
              {
                title: "Innovation",
                text: "We evolve with technology to improve your shopping journey.",
              },
              {
                title: "Community",
                text: "We foster a space where fashion lovers inspire each other.",
              },
              {
                title: "Excellence",
                text: "From quality control to customer care, we aim for perfection.",
              },
            ].map((val, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 m-12"
              >
                <h3 className="text-xl font-semibold text-yellow-950 mb-2">
                  {val.title}
                </h3>
                <p className="text-yellow-950">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
