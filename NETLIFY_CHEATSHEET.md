# 🚀 Netlify CLI Cheat Sheet

## Quick Deploy Commands
```bash
# Standard deployment
npm run build && netlify deploy --prod

# Preview deployment
netlify deploy

# With custom message
netlify deploy --prod --message "Update: xyz"
```

## Status & Info
```bash
netlify status                    # Current project info
netlify sites:list               # All sites
netlify open                     # Open site in browser
netlify open:admin               # Open admin panel
```

## Logs & Monitoring
```bash
netlify logs                     # Site logs
netlify logs:build              # Build logs
netlify functions:list           # List functions
netlify deploys                  # Recent deploys
```

## Emergency
```bash
netlify rollback                 # Rollback to previous deploy
netlify cancel-build            # Stop current build
```

## Environment
```bash
netlify env:list                # List env vars
netlify env:set KEY value       # Set env var
netlify env:pull .env.netlify   # Download env vars
```

---

**Project**: convoi-homepage  
**URL**: https://convoi.trinitysoft.online  
**Admin**: https://app.netlify.com/projects/convoihomepage 