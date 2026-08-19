# Robot Perception and Learning (CSIE5117)

Course website for **CSIE5117 Robot Perception and Learning** at National Taiwan
University, published at <https://ntu-rpl.github.io>.

Built with [al-folio](https://github.com/alshedivat/al-folio) v1.2. In v1.x
al-folio is a *thin starter*: layouts, includes, styles and feature JS live in
versioned gems (`al_folio_core` and friends, pinned in the `Gemfile`), not in
this repo. See `docs/ARCHITECTURE.md` before changing anything that looks like
theme code.

## Local development

Requires Ruby 3.3.5 (pinned in `.ruby-version`, matching `deploy.yml`) and Node 20+.

```bash
bundle install
npm ci
bundle exec jekyll serve   # http://localhost:4000
```

`baseurl` is intentionally empty — this is an organization page
(`ntu-rpl.github.io`), not a project page. Do not set it to `/al-folio`.

## Updating the course each semester

**Lecture schedule** lives in `_data/lectures/<year>.yml`. Each entry:

```yaml
- title: Introduction        # shown in the schedule table (required)
  date: 2026/9/7             # YYYY/M/D; omit to render "TBD"
  slides: lecture0_intro.pdf # file under assets/pdf/<year>/, or a full https:// URL
```

**Slides** go in `assets/pdf/<year>/`, named to match the `slides:` field.

**Rolling over to a new year:**

1. Create `_data/lectures/<new-year>.yml` and `assets/pdf/<new-year>/`.
2. Point `_pages/lectures.md` at it via `year: "<new-year>"` in the front matter.
3. Add the previous year to the `years:` list in `_pages/past_lectures.md`.

The schedule table is rendered by `_includes/lecture_table.liquid`, driven by
`_layouts/lectures.liquid`.

**Other content:** `_pages/logistics.md` (grading, policies, resources),
`_pages/announcements.md`, `_pages/instructors.md` (staff photos in
`assets/img/`), `_pages/calendar.md` (embedded Google Calendar),
`_pages/about.md` (landing page).

## Local theme overrides

`_layouts/` and `_includes/` here override the gem-provided defaults of the same
path. Track them so gem updates can flag drift:

```bash
bundle exec al-folio upgrade overrides audit
bundle exec al-folio upgrade overrides diff <path>
```

Commit the resulting `.al-folio-overrides.yml`.

## Deployment

`.github/workflows/deploy.yml` builds on push to `main` and publishes `_site/`
to the `gh-pages` branch.

## Upstream

`upstream` remote tracks <https://github.com/alshedivat/al-folio>. To pick up a
new al-folio release, bump the pins in the `Gemfile` (`group :al_folio_plugins`)
and the `plugins:` list in `_config.yml` — both lists must agree — then:

```bash
bundle install
bundle exec al-folio upgrade audit
```

Release notes: `docs/releases/`.
