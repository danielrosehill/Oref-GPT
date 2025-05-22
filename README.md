# Oref GPT: AI Workflow For Immediate Info About Red Alerts In Israel (Social Media)

![alt text](screenshots/1.png)

## Overview

Oref-GPT is an n8n automation workflow designed to process Red Alert notifications from Home Assistant and generate real-time situation reports during missile alerts in Israel. The system consists of two main workflow chains:

1. **Alert Notification Chain**: Receives webhook triggers from Home Assistant's Red Alert RF integration and sends immediate notifications via Pushover.

2. **Situation Report Chain**: Gathers real-time information about missile launches by querying Twitter API, processes the data, passes it to an AI agent for analysis, and distributes detailed situation reports via Twitter and email.

## How It Works

### Trigger
- The automation is triggered by webhook calls sent from Home Assistant with the Red Alert RF integration
- When a missile alert is detected, Home Assistant sends detailed alert data to the n8n workflow

### Processing Flow

#### Alert Chain
- Receives incoming webhook data from Home Assistant
- Extracts alert information (location, time, threat type)
- Formats and sends immediate notifications via Pushover

#### Situation Report Chain
- Queries Twitter API for real-time information about the missile launch
- Processes and reformats the Twitter data using transformation scripts
- Passes the formatted data to an AI agent for analysis and context generation
- Creates a comprehensive situation report with threat assessment
- Distributes the situation report through multiple channels:
  - Twitter updates
  - Email notifications

## Configuration

The workflow requires configuration of the following services:

- Home Assistant with Red Alert RF integration
- Pushover for immediate notifications
- Twitter API for data gathering and posting updates
- Email service for situation report distribution
- AI service for analysis and report generation

## Files

- `automation/workflow.json`: The main n8n workflow definition
- `scripts/transform.js`: JavaScript transformation for processing Twitter API data
- `prompts/`: Contains AI agent prompts for situation analysis

## Setup

To use this automation:

1. Import the workflow.json into your n8n instance
2. Configure the required API credentials for Twitter, Pushover, and email services
3. Set up the webhook endpoint in Home Assistant's Red Alert integration
4. Test the workflow to ensure proper operation

## Security Note

This workflow handles sensitive alert information. 

Ensure all API keys and credentials are properly secured and that data transmission is encrypted.
