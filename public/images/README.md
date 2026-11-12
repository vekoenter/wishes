# Deepika's Birthday Gallery & Photo Guidelines

This directory houses all photographs displayed across the cinematic birthday website.

## Configured Images

- `gallery-1.jpg`: Featured portrait in the "Fragments of Forever" gallery (Aspect ratio ~ 3:4 portrait)
- `gallery-2.jpg`: Starlit / evening landscape photo (Aspect ratio ~ 16:9 landscape)
- `gallery-3.jpg`: Candid coffee / laughter moment (Aspect ratio ~ 3:4 portrait)
- `gallery-4.jpg`: Featured elegant celebration portrait (Aspect ratio ~ 3:4 portrait)
- `gallery-5.jpg`: Sunset / adventure horizon photograph (Aspect ratio ~ 16:9 landscape)
- `gallery-6.jpg`: Warm intimate portrait (Aspect ratio ~ 1:1 square)
- `timeline-1.jpg`: First milestone image in "Our Story, Written in Little Moments"
- `timeline-2.jpg`: Second milestone image
- `timeline-3.jpg`: Third milestone image
- `timeline-4.jpg`: Fourth milestone celebration image
- `surprise-memory.jpg`: The secret memory photograph revealed inside the interactive envelope

## How to Add Your Real Photographs

1. Simply copy your personal photos into this folder (`public/images/`).
2. You can either rename your files to match the names above (`gallery-1.jpg`, etc.), OR update the paths and captions in:
   `src/config/birthday.ts`
3. Any standard web image format is supported: `.jpg`, `.jpeg`, `.png`, `.webp`.

## Captions and Memories
To customize what is written under each photo, open `src/config/birthday.ts` and modify the `title`, `caption`, `date`, and `location` fields!
