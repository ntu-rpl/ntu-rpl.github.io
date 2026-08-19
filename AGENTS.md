# Agent Guidelines — NTU RPL course site

This repo is the **course website for CSIE5117 Robot Perception and Learning**
at National Taiwan University, published at <https://ntu-rpl.github.io>.

It is a _site built from_ [al-folio](https://github.com/alshedivat/al-folio) v1.2,
**not** the al-folio starter itself. That distinction changes the rules — see
"Local overrides" below.

## Route your change

| Your change                                       | Goes in                                                      |
| ------------------------------------------------- | ------------------------------------------------------------ |
| Lecture schedule, dates, slide links              | `_data/lectures/<year>.yml`                                  |
| Lecture slides (PDFs)                             | `assets/pdf/<year>/`                                         |
| Grading, policies, resources                      | `_pages/logistics.md`                                        |
| Announcements                                     | `_pages/announcements.md`                                    |
| Staff list and photos                             | `_pages/instructors.md`, `assets/img/`                       |
| Landing-page copy, course description             | `_pages/about.md`                                            |
| Site title, URL, feature flags, plugin activation | `_config.yml` (**and** `Gemfile` for plugins — see below)    |
| How the schedule table renders                    | `_includes/lecture_table.liquid`, `_layouts/lectures.liquid` |
| Any other layout / include / style                | **stop** — read "Local overrides" first                      |

## Three silent failure modes

These produce no build error. They are inherited from al-folio v1.x and are
documented in full in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

1. **A feature needs both its gem and its flag.** Runtime lives in gems. A
   feature renders only when the gem is active _and_ the `_config.yml` flag is
   on _and_ the page's front matter opts in. Otherwise the tag emits an empty
   string — no warning, no placeholder.
2. **`Gemfile` and `_config.yml` are two lists that must agree.** Adding or
   removing a plugin means editing `group :al_folio_plugins` in the `Gemfile`
   **and** the `plugins:` list in `_config.yml`. A gem in only one is inert.
   Note the spelling: gem ids use underscores (`al_folio_core`).
3. **`baseurl` must stay empty.** This is an organization page
   (`ntu-rpl.github.io`), so `baseurl:` is present but blank. Upstream al-folio
   docs and its own `CLAUDE.md` say to build with `--baseurl /al-folio` — that
   is correct for the al-folio demo site and **wrong here**. Setting it breaks
   every asset and internal link.

## Local overrides

Runtime (layouts, includes, Sass, feature JS) is owned by gems pinned in the
`Gemfile`. **In this repo — a user site — shadowing a gem-owned file by adding
the same path locally is fully supported**, and `_layouts/lectures.liquid` and
`_includes/lecture_table.liquid` do exactly that.

This is the opposite of the rule in the al-folio starter repo, where those
directories must not exist. Do not apply upstream's "never edit runtime here"
guidance to this repo.

Prefer configuration over an override. When you do add one, track it:

```bash
bundle exec al-folio upgrade overrides audit          # records gem + version + hashes
bundle exec al-folio upgrade overrides diff <path>    # review drift after a gem bump
bundle exec al-folio upgrade overrides accept <path>  # acknowledge reviewed drift
```

Commit the resulting `.al-folio-overrides.yml`.

## Command set

```bash
bundle install                  # ruby 3.3.5, pinned in .ruby-version
npm ci                          # prettier only
bundle exec jekyll serve        # http://localhost:4000  (no baseurl path)
bundle exec jekyll build        # production build to _site/
bundle exec al-folio upgrade audit   # blocking findings on the v1 config contract
npx prettier . --check          # CI runs this via prettier-comment-on-pr.yml
```

Do not remove the `al_folio.*` contract keys from `_config.yml`
(`api_version`, `style_engine`, `tailwind.*`, `distill.*`) — the audit blocks on them.

## Upstream

The `upstream` remote tracks al-folio. Release notes live in `docs/releases/`.
Upgrading means bumping pins in the `Gemfile` and `_config.yml` together, then
running `bundle install && bundle exec al-folio upgrade audit`. `bundle update`
alone does nothing — the pins are exact.

`docs/` is upstream reference documentation, kept for `ARCHITECTURE.md`,
`BOUNDARIES.md`, `CUSTOMIZE.md`, and `FAQ.md`. It describes the starter, so read
it with the override rule above in mind.
