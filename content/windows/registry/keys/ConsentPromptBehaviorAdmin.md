---
tags:
  - windows-registry
  - windows-uac
---
## Description
Configures [[User Account Control]] prompt behavior when an app wants to run as Administrator
This setting applies to members of the local [[Administrators group]]

## Location
```
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System
```

## Value type
- REG_DWORD

## Value data

| Value | Behavior of the elevation prompt                                                 |
| ----- | -------------------------------------------------------------------------------- |
| 0     | Elevate all apps without asking user                                             |
| 1     | Ask user for credentials in [[Secure Desktop]]                                   |
| 2     | Ask user Yes/No in [[Secure Desktop]]                                            |
| 3     | Ask user for credentials                                                         |
| 4     | Ask user Yes/No                                                                  |
| 5     | Ask user Yes/No. This only applies to Windows apps. This is the default behavior |

## Related Group Policy
```
Computer Configuration\Windows Settings\Security Settings\Local Policies\Security Options\User Account Control: Behavior of the elevation prompt for administrators in Admin Approval Mode
```

## Applies to
- Windows Vista+

## Recommendation
- For maximum security, set the value to `1`. All admin-related actions will require your password, similar to Linux and macOS

## References
- https://learn.microsoft.com/en-us/windows/security/application-security/application-control/user-account-control/settings-and-configuration?tabs=reg
