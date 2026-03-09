---
tags:
  - windows-registry
---
## Description
Configures Windows to use [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time "wikipedia:Coordinated Universal Time") time standard

## Location
```
HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\TimeZoneInformation
```

## Value type
- REG_DWORD

## Value data

| Value | Meaning                            |
| ----- | ---------------------------------- |
| 0     | Use localtime. This is the default |
| 1     | Use UTC                            |

## Related Group Policy
- TBA

## Applies to
- TBA

## Recommendation
- On dual boot system, it is recommended to tell Windows to use UTC, rather than Linux to use localtime. Set this key to 1.
- Many Linux distributions like Ubuntu/Fedora use localtime if Windows was detected on any disk during their installation. In such case, don't set this key to 1.

## References
- https://wiki.archlinux.org/title/System_time#UTC_in_Microsoft_Windows