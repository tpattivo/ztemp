"""
Master Video Render Runner.

Usage:
    python render.py              # Renders V2 (Cinematic Stock Video Edition) by default
    python render.py --version v2 # Renders V2 (Cinematic Stock Video Edition)
    python render.py --version v1 # Renders V1 (Original Motion Graphics Edition)
"""

import argparse
import os
import subprocess
import sys

def main():
    parser = argparse.ArgumentParser(description="Render VLNCN Promotional Videos")
    parser.add_argument(
        "--version", "-v",
        choices=["v1", "v2"],
        default="v2",
        help="Video version to render: 'v2' (Cinematic Stock Video) or 'v1' (Motion Graphics)"
    )
    args = parser.parse_args()

    root_dir = os.path.dirname(os.path.abspath(__file__))

    if args.version == "v2":
        script = os.path.join(root_dir, "v2_cinematic", "render_video_cinematic.py")
        print("\n>>> Launching V2 Cinematic Video Renderer...")
    else:
        script = os.path.join(root_dir, "v1_motion_graphics", "render_video.py")
        print("\n>>> Launching V1 Motion Graphics Video Renderer...")

    ret = subprocess.call([sys.executable, script])
    sys.exit(ret)

if __name__ == "__main__":
    main()
