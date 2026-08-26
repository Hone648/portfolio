Note: This file preserves the complete pre-Slice-16B public Home Security and Automation Lab narrative as source material for future technical writing. It is not the current public case-study route.

I wanted a home security system whose behavior I could inspect and operate myself. That made local processing, understandable service boundaries, and reviewable configuration changes more important than a polished appliance experience.

The result is a self-hosted NVR and automation stack on an Ubuntu 24.04.3 LTS host. Docker Compose runs Frigate, Home Assistant, and Mosquitto as separate services. Frigate handles video ingest, detection, recording, and event production. Mosquitto carries event messages. Home Assistant consumes the relevant event flow and applies automation actions. Keeping those responsibilities distinct makes the system easier to reason about when one visible symptom could have several causes.

The public `nvr-infrastructure` repository is now part of that operating model. It contains a sanitized representative configuration and the procedures used to review selected tracked files. It is evidence of the architecture and configuration practices described here, but it is not a verbatim copy of the private deployment and its single sanitized camera definition is not a complete camera inventory.

## Following the event path instead of counting components

The useful way to understand the system is as a path through boundaries.

A sanitized RTSP definition supplies separate inputs for detection and recording. Frigate sends the lighter input through its detection path while retaining the higher-quality input for recording. The representative configuration tracks `person`, `car`, and `bird` objects. Its motion masks reduce or ignore motion activity in configured regions, while its configured zone provides spatial context. The reviewed configuration does not establish that zone membership is required for alerts, detections, persistent notifications, or review events.

Frigate publishes events through MQTT to Mosquitto. Home Assistant listens to that event stream, and the representative person-event automation creates a persistent notification. That is deliberately a narrow claim: the reviewed automation demonstrates an event crossing the Frigate, broker, and Home Assistant boundaries. It is not a professionally monitored alarm, guaranteed delivery path, emergency response system, or claim that every private automation is published.

This path is also the troubleshooting order. A running container does not prove that an RTSP input is healthy. A healthy input does not prove that detection events are being produced. A Frigate event does not prove that the broker and consumer observed it. A received event does not prove that the intended Home Assistant action ran. Checking each boundary in sequence prevents an upstream stream problem from being treated as an automation problem.

## Separating video work from event policy

The reviewed Frigate configuration uses VAAPI FFmpeg acceleration through `/dev/dri`. Hardware-assisted video processing matters because decoding and preparing streams is continuous work, but the public evidence does not turn that implementation detail into a performance benchmark or a claim about the complete private hardware inventory.

Detection and retention are separate concerns. The representative configuration keeps motion-oriented recordings for a short window and retains alerts, detections, and snapshots longer for event review. That is more useful than treating every frame as equally valuable, and it still leaves storage as an operational constraint. Age-based Frigate retention exists today; a disk-threshold cleanup job does not. Monitoring filesystem use, defining safe thresholds, and designing a guarded cleanup process remain planned work.

Availability status also stays honest. The stack is operational in a private residential environment, but one host is still one dependency. There is no measured availability figure, failover claim, enterprise observability stack, or assurance that local processing makes every dependency fully offline.

## Treating reviewed configuration as source

The sanitized repository tracks selected Compose, Frigate, Home Assistant, and Mosquitto configuration. Secrets, authenticated RTSP URLs, runtime data, logs, databases, recordings, and other generated state are excluded. Placeholders and environment references preserve configuration shape without publishing access material.

That separation turns configuration into something reviewable. A proposed change can be inspected as a diff, checked against the documented source boundary, and validated before it reaches the operational copy. The repository validation script checks YAML syntax, the Python validator, Bash syntax, the Docker Compose model, and Mosquitto configuration. Those checks do not prove that a private camera is reachable or that every live integration works, but they catch a useful class of configuration failures before deployment.

The repository is therefore stronger evidence than prose alone while remaining intentionally incomplete. It shows selected tracked configuration and operations documentation without exposing the private topology needed to reproduce the residential environment.

## Documenting how a change should reach the live stack

The repository includes a configuration-deployment runbook rather than automatic synchronization with the live stack. The documented procedure requires repository validation and a timestamped backup of each affected live file before replacement. It maps selected repository files to their operational copies and calls for validating the live Compose model before recreating an affected service.

For service-specific changes, the runbook directs the operator to recreate only the affected service instead of routinely taking down the entire stack. Its post-deployment verification steps cover service state, relevant health information, recent logs, and whether the application loaded the intended configuration without introducing repeated errors.

If validation or verification fails, the documented rollback steps restore replaced files from the deployment backup, validate the restored Compose model, recreate the affected service, and repeat the checks. The repository establishes that this procedure is documented; it does not establish that deployment, backup, targeted recreation, verification, or rollback have been exercised against the live NVR stack. These steps also do not amount to full backup and recovery: comprehensive backups for application state, off-host storage, encrypted backup handling, tested restoration, and full host rebuild procedures remain planned.

Container versioning has a similar current-versus-intended boundary. The tracked services still use floating image tags. Moving to exact upstream version tags is the documented policy direction, not a completed migration.

## Keeping roadmap work in the future tense

Several operational improvements are documented without being presented as deployed. Full monitoring and maintenance automation remain planned. Storage safeguards beyond current retention remain future work. Security hardening, credential-rotation procedure work, and broader secret-scanning controls remain future work. The network migration is also still planned.

Writing those limits next to the implemented controls matters. Repository validation tooling is implemented, while backup-before-replacement, deployment, verification, and rollback remain documented procedures without separate evidence of live execution. Full-system backup and tested recovery are not implemented. Frigate retention is present now. Disk-threshold cleanup is not. A version-pinning policy exists now. Exact image pinning is not complete.

## Publishing evidence without publishing the residence

Home security configuration can reveal much more than an ordinary application repository. Authenticated stream URLs, credentials, addresses, device identifiers, exact camera placement, schedules, footage, logs, and network topology can expose both access paths and household patterns.

The public repository is sanitized around that risk. It excludes secrets and runtime data, uses representative names and inputs, and documents the boundary between reviewed source and operational copies. The portfolio likewise hosts no Home Security screenshots, footage, reconstructed topology, or visual gallery. The repository is public code and documentation evidence, not portfolio visual evidence.

That boundary makes the project reviewable without suggesting that publication equals a security audit. The system remains a private residential integration, not a commercial security product or enterprise video platform.

## What this project demonstrates

The strongest lesson is not that several containers can run together. It is that a useful operational system needs legible boundaries and disciplined change handling.

The event path connects RTSP processing, VAAPI-assisted video work, Frigate object events, MQTT delivery, and Home Assistant automation. The documented change path connects reviewed source, multi-format validation, live-file backups, targeted service recreation, verification, and rollback. Both paths are useful because each defines an observable boundary, while only the event path and repository validation have reviewed operational or implemented evidence here.

The project also shows the value of saying what evidence does not prove. A representative configuration is not a private deployment inventory. A documented configuration-rollback procedure is neither evidence of an exercised live rollback nor complete disaster recovery. Event retention is not a storage safety system. An operational home lab is not a highly available platform. Keeping those distinctions visible is part of operating the system responsibly.
