---
tags:
  - windows-registry
  - windows-uac
---
## Description
Configures [[User Account Control]] prompt behavior when an app wants to run as Administrator
This setting applies to users not belonging to [[Administrators group]]

## Location
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System


## Value type
REG_DWORD

## Value data

| Value | Behavior of the elevation prompt                                              |
| ----- | ----------------------------------------------------------------------------- |
| 0     | Deny all Admin requests and display "Access denied" to the user               |
| 1     | Ask user for credentials on [[Secure Desktop]]                                |
| 3     | Ask user for credentials                                                      |

## Related Group Policy
Computer Configuration\Windows Settings\Security Settings\Local Policies\Security Options\User Account Control: Behavior of the elevation prompt for standard users


## Applies to
- Windows Vista+

## Recommendation
None

## References
- https://learn.microsoft.com/en-us/windows/security/application-security/application-control/user-account-control/settings-and-configuration?tabs=reg
