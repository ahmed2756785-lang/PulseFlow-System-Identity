# PulseFlow System Identity — Android build

This repository contains the GitHub Actions workflow for packaging the hosted PulseFlow web app as an Android APK with Capacitor.

## Build an APK

1. Deploy the PulseFlow Next.js application to an HTTPS host.
2. Open **Actions → Build PulseFlow Android APK → Run workflow**.
3. Enter the deployed HTTPS URL in the `server_url` input.
4. Wait for the workflow to finish.
5. Download **pulseflow-android-debug** from the run's Artifacts section.

The APK is a WebView wrapper around the hosted app. The app's server, Supabase Auth/database, and OpenAI API must already be configured. Do not put Supabase service-role keys or OpenAI secrets in the Android app.

A successful Android packaging build does not by itself prove multi-device synchronization; that requires server-side persistence and authentication in the deployed PulseFlow app.
