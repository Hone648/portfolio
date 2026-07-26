export type CareerEntryId = "qorvo" | "cretic-forbes" | "spea" | "navy";

export type CareerEntry = {
  readonly id: CareerEntryId;
  readonly role: string;
  readonly organization: string;
  readonly summary: string;
  readonly highlights: readonly string[];
};

export type TransferableStrength = {
  readonly title: string;
  readonly description: string;
  readonly relatedCareerEntryIds: readonly CareerEntryId[];
};

export const careerEntries = [
  {
    id: "qorvo",
    role: "Equipment Technician",
    organization: "Qorvo",
    summary:
      "Maintained semiconductor-fabrication equipment and diagnosed mechanical, electrical, electronic, and software-based faults in a cleanroom environment.",
    highlights: [
      "Supported thin-film equipment, evaporator tools, chemical wash stations, and robotic handlers.",
      "Maintained closed-loop communication with equipment engineers during fault isolation and equipment recovery.",
    ],
  },
  {
    id: "cretic-forbes",
    role: "Electronics Technician",
    organization: "Cretic Energy Services / Forbes Energy Services",
    summary:
      "Engineered and supported data-acquisition and remote-communications systems used for real-time field monitoring and control.",
    highlights: [
      "Installed and maintained satellite and cellular communications for remote units.",
      "Configured data-gathering software and hardware for pressure, rate, temperature, and weight monitoring.",
      "Maintained operator control interfaces for flow, pressure, and velocity.",
    ],
  },
  {
    id: "spea",
    role: "Field Engineer",
    organization: "SPEA",
    summary:
      "Calibrated, repaired, upgraded, and supported automated electronic board-test systems across distributed customer sites. Worked with SPEA during two separate periods.",
    highlights: [
      "Performed data extraction, software and hardware upgrades, installations, and repairs.",
      "Provided customer support and technical training.",
      "Worked with automated semiconductor-test systems, motion controls, and electronic measurement equipment.",
    ],
  },
  {
    id: "navy",
    role: "Avionics Electronics Technician",
    organization: "U.S. Navy",
    summary:
      "Maintained and repaired communications, radar, GPS, weather, and related avionics systems.",
    highlights: [
      "Used electronic and RF measurement equipment to isolate system faults.",
      "Performed installations and modifications to avionics equipment.",
      "Coordinated repairs across technical specialties and supervised avionics maintenance work.",
    ],
  },
] as const satisfies readonly CareerEntry[];

export const transferableStrengths = [
  {
    title: "Systems troubleshooting",
    description:
      "Isolated faults across software, electronics, instrumentation, mechanical equipment, networks, and control interfaces.",
    relatedCareerEntryIds: ["qorvo", "cretic-forbes", "spea", "navy"],
  },
  {
    title: "Software, hardware, and data interfaces",
    description:
      "Worked with data acquisition, remote telemetry, automated test systems, equipment software, and operator-facing controls.",
    relatedCareerEntryIds: ["qorvo", "cretic-forbes", "spea"],
  },
  {
    title: "Customer and technical-team communication",
    description:
      "Provided customer support and training, maintained closed-loop communication with engineers, and coordinated work across technical specialties.",
    relatedCareerEntryIds: ["qorvo", "cretic-forbes", "spea", "navy"],
  },
  {
    title: "Measurement and operational discipline",
    description:
      "Applied calibration, preventive maintenance, electronic measurement, installation, and documented change practices in process-sensitive operating environments.",
    relatedCareerEntryIds: ["qorvo", "spea", "navy"],
  },
] as const satisfies readonly TransferableStrength[];

export function getCareerEntryById(id: CareerEntryId) {
  return careerEntries.find((entry) => entry.id === id);
}
