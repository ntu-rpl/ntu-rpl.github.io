# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

`AGENTS.md` (imported above) is the authoritative entry point: change routing,
the three silent failure modes, the local-override rule, and the command set.
Read it before editing.

## What this repo is

The NTU CSIE5117 Robot Perception and Learning course site — a site *built from*
al-folio v1.2, not the al-folio starter. Upstream's own agent docs in `docs/`
are written for the starter repo and get two things backwards here:

- **Local overrides are allowed.** `_layouts/` and `_includes/` legitimately
  exist in this repo and shadow gem defaults.
- **`baseurl` is empty.** Never build with `--baseurl /al-folio`.

## Semester rollover

1. Create `_data/lectures/<new-year>.yml` and `assets/pdf/<new-year>/`.
2. Set `year: "<new-year>"` in the front matter of `_pages/lectures.md`.
3. Prepend the outgoing year to `years:` in `_pages/past_lectures.md`.
4. Check the meeting time and room in `_pages/about.md` against the real schedule.

Entries in `_data/lectures/<year>.yml` render as "TBD" when `date:` or `slides:`
is empty, which is the intended state for a semester that has not started.

## Optional toolchains

- **ImageMagick** on `PATH` is needed for responsive images (`imagemagick.enabled`).
- **`requirements.txt`** (`scholarly`, `nbconvert`, `pyyaml`) is only needed for
  the citation-update workflow and Jupyter posts; neither is used by this site
  today.
- **purgecss** is not a devDependency; `deploy.yml` installs it globally.
