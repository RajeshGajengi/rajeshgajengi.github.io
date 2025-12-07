// components/TechIcon.js
import Image from "next/image"

const MAP = {
  docker: "/icons/docker.svg",
  kubernetes: "/icons/kubernetes.svg",
  k8s: "/icons/kubernetes.svg",
  alertmanager: "/icons/alertmanager.png", 
  aws: "/icons/aws.svg",
  amazon: "/icons/aws.svg",
  python: "/icons/python.svg",
  terraform: "/icons/terraform.svg",
  ansible: "/icons/ansible.svg",
  prometheus: "/icons/prometheus.svg",
  grafana: "/icons/grafana.svg",
  helm: "/icons/helm.svg",
  github: "/icons/github.svg",
  linux: "/icons/linux.svg",
  // add more mappings as needed
}

export default function TechIcon({ name, size = 18 }) {
  if (!name) return null
  const key = name.toString().toLowerCase()
  const src = MAP[key]

  if (src) {
    return (
      <span className="inline-block align-middle" style={{ width: size, height: size }}>
        <Image src={src} alt={`${name} icon`} width={size} height={size} />
      </span>
    )
  }

  // fallback simple circle icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block align-middle" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#94A3B8" />
    </svg>
  )
}
